# state 范式结构

```js
{
    "video": {
        "byId": {
            "video1": {
                "id": "video1",
                "url": "",
                "name": "镜头1",
                "components": ["1", "2"],
                "childrenVideo": ["video2", "video2"]
            },
            "video2": {
                "id": "video2",
                "url": "",
                "name": "镜头2",
                "components": ["3", "4"]
            }
        },
        "allIds": ["video1", "video2"]
    },
    "components": {
        "byId": {
            "com1": {
                "id": "com1",
                "name": "组件1",
                "style": {},
                "eventType": 1,
                "linkType": "inner",
                "targetLink": "video2"
            },
            "com2": {
                "id": "com2",
                "name": "组件2",
                "style": {
                    "position": "absolute",
                    "left": "10px",
                    "top": "20px",
                    "width": "100px",
                    "height": "200px",
                    "box-shadow": "2px 2px",
                    "radius": "10px",
                    "color": "red"
                },
                "eventType": 1,
                "linkType": " outter",
                "targetLink": "http://baidu.com"
            }
        }
    }
}

```

# 与服务端交互数据结构
