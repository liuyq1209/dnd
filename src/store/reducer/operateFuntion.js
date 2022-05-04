export const addBlock = (payload, Block, Scene) => {
  const bk = Block.create(payload)
  const scs = Scene.filter(v => v.name === bk.curScene.name).toRefArray()
  const sc = scs.length ? scs[0] : {}
  sc.blocks = sc.blocks || []
  //在对应的镜头的blocks字段中添加该组件id
  Scene.withId(sc.id).update({blocks: sc.blocks.concat(bk.id)})
  return bk
  //todo删除所有组件,再次添加组件时,组件id=0,有问题
}

export const changeBlockStyles = (payload, Block) => {
  //其实changestyles和changeAttr可以合并,但是考虑到处理方式略有不同,写在一起需要额外写ifelse,姑且就这样吧
  const bk = Block.withId(payload.id)
  bk.styles = bk.styles || {}
  bk.update({styles: {...bk.styles, ...payload.styles}})
}

export const changeBlockAttr = (payload, Block) => {
  const bk = Block.withId(payload.id)
  if (payload.field === "props") {
    bk.update({[payload.field]: {...bk.props, ...payload.value}})
  } else {
    bk.update({[payload.field]: payload.value})
  }
}

export const deleteBlock = (payload, Block, Scene) => {
  Block.withId(payload.id).delete()
  let curSc = Scene.all()
    .toRefArray()
    .find(v => v.id == payload.sceneId)
  console.log(curSc, curSc.blocks)
  Scene.withId(payload.sceneId).update({
    blocks: curSc.blocks.filter(v => v != payload.id),
  })
}

export const addScene = (payload, Block, Scene, dbState) => {
  //redux-orm id的规则是取当前id最大值+1
  //获取当前最大id, +1作为镜头名
  //dbState?.Scene是未经过orm.session处理过的数据
  const maxId = dbState?.Scene?.meta?.maxId || 0
  let newId = Scene.all().toRefArray().length == 0 ? 0 : maxId + 1
  if (!payload.name) {
    Scene.create({
      ...payload,
      name: `镜头${newId + 1}`,
    })
  } else {
    Scene.create({
      ...payload,
    })
  }
}

export const deleteScene = (payload, Block, Scene) => {
  Scene.withId(payload.id).delete()
}

export const changeSceneAttr = (payload, Block, Scene) => {
  Scene.withId(payload.id).update(payload.attr)
}
