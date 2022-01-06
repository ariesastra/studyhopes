// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json(
    { 
      data: [
        {
          id: 1,
          country_id: 1,
          name: "University of Indonesia"
        },
        {
          id: 2,
          country_id: 1,
          name: "Bandung Institute of Technology"
        },
        {
          id: 3,
          country_id: 1,
          name: "Gadjah Mada University"
        },
      ]
    }
  )
}
