import axios from "axios";

async function getUserData(userId) {
    try {
        // Kullanıcı bilgileri için istek
        const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)

        // Kullanıcının post'ları için istek
        const postResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)

        // Kullanıcı bilgileri ve postları birleştirilir
        const userData = {
            ...userResponse.data,
            posts: postResponse.data
        }

        // birleştirilmiş veri return edilir
        return userData;
    } catch (error) {
        // Hata durumunda hata mesajını logla
        console.error('Hata', error.message);
        // Hata durumunda null değerini retrun et veya alternatif bir işlem yapabilirsiniz    
        return null;   
    }
}

// Fonksiyonu Kullanırken
 const userId = 1 // misal olarak
 getUserData(userId)
    .then( data => {
        if (data) {
            console.log('Kullanıcı Verileri: ', data)
        } else {
            console.log('Kullanıcı Verileri Alınamadı!')
        }
    })
    .catch(err => console.error('Bir Hata Oluştu:', err))