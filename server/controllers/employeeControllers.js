

const employeeRegister = async (req,res)=>{
    try {
        console.log(req.body);
        res.json({ status: true });
        
    } catch (error) {
        console.log(error)

    }
}
exports.employeeRegister=employeeRegister


const login = async(req,res)=>{
    try{
        console.log("sadas",req.body);
        res.json({ status: true });
    }catch(error){
        console.log(error);
    }
}
exports.login=login