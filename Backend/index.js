const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
app.listen(3008)

app.get("/api/getusers", async (req, res) => {
  const users = await prisma.user.findMany()
  console.log(users);
  
  return res.status(200).json(users)
});

app.put("/api/updateUser", async (req, res) => {
  const { Useremail, stage } = req.body;

  try {
    console.log(`Updating user with email: ${Useremail}`);

    const existingUser = await prisma.user.findFirst({
      where: { email: Useremail },
    });

    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }

    const updatedUser = await prisma.user.update({
      where: { email: Useremail },
      data: { stage },
    });

    console.log("User updated:", updatedUser);

    return res.status(200).json(updatedUser);
  } catch (error) {
    console.error("Error updating user:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});


app.post("/api/signup", async (req, res) => {
  console.log("Sigining..",req.body);
  
  try {
    const { Username, Useremail, Userpassword } = req.body;

    const existingUser = await prisma.user.findFirst({
      where: { email: Useremail },
    });

    // if (existingUser) {
    //   return res.status(400).json({ message: "User already exists" });
    // }

    const newUser = await prisma.user.create({
      data: {
        name: Username,
        email: Useremail,
        password: Userpassword, 
      },
    });

    console.log("User created:", newUser);

    return res.status(201).json({ message: "User created successfully" });

  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});


app.post("/api/Login", async (req, res) => {
    // console.log(req);
    
    const { Useremail,Userpassword } = req.body;
    const val=await prisma.user.findFirst({where:{email:Useremail}})
    if(val){
      if(val.email===Useremail&&val.password===Userpassword){
        console.log("Logged in");
      return res.status(200).json({ message: "User Loggedin successfully" });

      }
      console.log("NOT logged in");
    }
    else{
      
      
      return res.status(404).json({ message: "User not loggedin successfully" });

    }
    
    
    
  });
