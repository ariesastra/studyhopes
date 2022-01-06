// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json(
    { 
      data: [
        {
          id: 1,
          name: "Computer Science",
          cost: [
            { currency: "idr", amount: 5000000.0 },
            { currency: "php", amount: 17777.0 }
          ]
        },
        {
          id: 2,
          name: "Economics",
          cost: [
            { currency: "idr", amount: 6000000.0 },
            { currency: "php", amount: 21333.0 }
          ]
        },
        {
          id: 3,
          name: "Business",
          cost: [
            { currency: "idr", amount: 7000000.0 },
            { currency: "php", amount: 24888.0 }
          ]
        },
      ]
    }
  )
}
