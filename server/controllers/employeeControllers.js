

const employeeRegister = async (req,res)=>{
    try {
        console.log(req.body);
        res.json({ status: true });
        res.redirect("/login");
    } catch (error) {
        console.log(error)

    }
}
exports.employeeRegister=employeeRegister