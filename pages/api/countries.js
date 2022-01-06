// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json(
    { 
      data: [
        {
          id: 1,
          name: "Indonesia",
          code: "id",
          dial_code: "62"
        },
        {
          id: 2,
          name: "Philippines",
          code: "ph",
          dial_code: "63"
        }
      ]
    }
  )
}
