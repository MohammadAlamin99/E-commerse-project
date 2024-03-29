const { SaveProfile, ProfileDetails } = require("../services/UserService")

exports.CreateProfile = async(req, res)=>{
   let result = await SaveProfile(req)
   return res.status(200).json(result)
}

exports.UpdateProfile = async(req, res)=>{
    let result = await SaveProfile(req)
   return res.status(200).json(result)
}


exports.ReadProfile = async(req, res)=>{
    let result = await ProfileDetails(req);
    return res.status(200).json(result);
}