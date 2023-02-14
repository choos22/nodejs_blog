import connection from "../configs/connectDB";



const homePage = async (req, res) => {
    // const data = [];
    // connection.execute(
    // 'SELECT * FROM `users` ',
    // function(err, results, fields) {
    //     console.log('checkkkk sql')
    //     // console.log(results); // results contains rows returned by server
    //     results.map((row) => {
    //         data.push({
    //             id:row.id,
    //             name:row.name,
    //             decription:row.decription,
    //             img:row.img,
    //             oldPrice:row.oldPrice,
    //             salePrice:row.salePrice
    //         })
       
    // });
    // })
    // const connection = await mysql.createConnection({host:'localhost', user: 'root', database: 'nodejs'});
    const [rows, fields] = await connection.execute('SELECT * FROM `users` ');
    return res.render('home.ejs', {dataUser: rows}) 
}

const getInformation = async (req, res) => {

    const userName = req.params.name;
    const [user, fields] = await connection.execute('select * from users where name = ?', [userName])
    return res.render('sidebar', {dataUser: user})
}

module.exports = {
    homePage,getInformation
}