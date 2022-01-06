// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json(
    { 
      id: 1,
      first_name: "John",
      last_name: "Doe",
      username: "johndoe",
      email: "johndoe@example.com",
      address: "Noble House 29th floor, Mega Kuningan, Jakarta",
      gender_id: 1,
      phone_number: "0938475234",
      country_id: 1
    }
  )
}
