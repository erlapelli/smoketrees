const User = require('../models/user')
const Address = require('../models/address')

const Register = async (req, res) => {
    try {
        const { name, addressLine, city, state, postalCode } = req.body;

        const user = new User({ name });
        await user.save();

        const address = new Address({
            user: user._id,
            addressLine,
            city,
            state,
            postalCode
        });

        await address.save();

        user.addresses.push(address._id);
        await user.save();

        res.status(201).send('User and Address saved successfully!');
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
}

module.exports={Register}
