var db=require('./src/framework/db');
var fs=require('fs')
async function a(){



     // db.sequelize.transaction(transaction=> {
     //            let model={key:'cc1'}
     //        return db['bpmn_re_procdef'].update(model, {where: {id: 'cc:20:110'},transaction}).then(updateArray => {
     //            console.log(updateArray)
     //         let updateUserPromises = [];
     //         let model = {key: 'cc4433'}
     //         updateUserPromises.push(db['bpmn_re_procdef'].update(model, {where: {id: 'cc:20:110'}, transaction}))
     //         let model1 = {key: 'cc'}
     //         updateUserPromises.push(db['bpmn_re_procdef'].update(model1, {where: {ids: 'cc:20:110'}, transaction}))
     //         return Promise.all(updateUserPromises)
     //
     //     })
     //    }).then(function (result) {
     //        // Transaction 会自动提交
     //        // result 是事务回调中使用promise链中执行结果
     //    }).catch(function (err) {
     //        // console.log(err)
     //        // Transaction 会自动回滚
     //        // err 是事务回调中使用promise链中的异常结果
     //    });

await db.sequelize.transaction(transaction=> {
               let model={key:'cc1'}
           return db['bpmn_re_procdef'].update(model, {where: {id: 'cc:20:110'},transaction}).then(updateArray => {
               console.log(updateArray)
            let updateUserPromises = [];
            let model = {key: 'cc4433'}
            if('name' in model){

            }
            updateUserPromises.push(db['bpmn_re_procdef'].update(model, {where: {id: 'cc:20:110'}, transaction}))
            let model1 = {key: 'cc'}
            updateUserPromises.push(db['bpmn_re_procdef'].update(model1, {where: {id: 'cc:20:110'}, transaction}))
            return Promise.all(updateUserPromises)

        })
       }).then(function (result) {
           // Transaction 会自动提交
           // result 是事务回调中使用promise链中执行结果
    return {adc:'11111111'}
       }).catch(function (err) {
            console.log(err)
           // Transaction 会自动回滚
           // err 是事务回调中使用promise链中的异常结果
       });
}

let k=a();
console.log(k)
