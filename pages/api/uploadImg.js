const data = {
  code: 200,
  data: {
    url: "https://live-s3m.mediav.com/nativevideo/760b9d3b88bf56380af7bffcfcd67873.mp4",
  },
}

export default function handler(req, res) {
  res.status(200).json(data)
}
