const ContactSchema = require('../models/Contact')

exports.AddContact = async (req,res)=>{
    const {name,email,age,pic} = req.body;
    
    try {

       const newContact = new ContactSchema(req.body);
       const mawjoud = await ContactSchema.findOne({email})
       if(mawjoud){
            return res.status(400).send('Déja mawjoud')
       }
        await newContact.save();
        res.status(200).send({msg:"added", newContact });
    } catch (error) {
        
        res.status(500).send({msg:'could not add user'})
    }

}

exports.ShowContacts =  async (req,res)=>{
    try {
       const collectionContact =  await ContactSchema.find();
        res.status(200).send({msg:"list",collectionContact});
    } catch (error) {
        res.status(500).send({msg:"could not list"})
    }
}


exports.DeleteContact = async (req,res)=>{
    const {id} = req.params
    try {
        const deletContact = await ContactSchema.findOneAndDelete({_id : id});
        res.status(200).send({msg:'deleted'});
    } catch (error) {
        res.status(500).send({msg:"could not delete"})
    }
}

exports.UpdateContact = async (req,res)=>{
    const {id} = req.params
    try {
        const updateContact = await ContactSchema.findByIdAndUpdate(id,{$set : {...req.body}})
        res.status(200).send({ msg:'updated' ,updateContact});
    } catch (error) {
        res.status(500).send({msg:'could not update'})
    }
}

exports.ShowContactByID = async (req,res)=>{
    const {id} = req.params
    try {
       const collectionContact =  await ContactSchema.findById(id);
        res.status(200).send({msg:'user',collectionContact});
    } catch (error) {
        res.status(500).send({msg:'could not add user'})
    }
}