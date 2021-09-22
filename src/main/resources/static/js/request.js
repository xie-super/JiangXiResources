export const request = (params) => {
    return new Promise((resolve, reject) => {
        $.ajax({
            type:params.type||'POST',
            url:params.url,
            data:params.data,
            datatype:'json',
            success: (result) => {
                resolve(result);
            },
            fail: (err) => {
                reject(err);
            },

        })
    });
}

