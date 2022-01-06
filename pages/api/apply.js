// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(201).json(
    { 
      messages: [
        "data submitted success"
      ],
      errors: [],
      data: {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
        school_id: req.body.school_id,
        study_id: req.body.study_id
      }
    }
  )
}
