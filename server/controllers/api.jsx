module.exports = {

    index(req, res, next) {
        return res.json([
            {
                id: 0,
                name: 'Technomart',
                description: 'Web-site for selling building materials.'
            },
            {
                id: 1,
                name: 'TypeFast',
                description: 'Who will write a phrase on screen faster?'
            },
            {
                id: 2,
                name: 'BeFriend',
                description: 'How much you know about your friends?'
            }
        ]);
    }

}
