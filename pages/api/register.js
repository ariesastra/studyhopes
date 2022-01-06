// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json(
    {
      id: 1,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      access_token: "wRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
      messages: [
        "registration success"
      ],
      errors: []
    }
  )
}
