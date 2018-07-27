module.exports = {
    find(){
        return $.ajax({
            url:'http://39.106.187.52:8080/ssh1fs/api/list',
            data:{
                c_id:1
            },
            contentType: "application/json",
            type: 'get',

            success: (result) => {
                return result
            }
        })
    }

}