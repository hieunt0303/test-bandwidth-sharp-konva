import db from '../utils/dbUtil';


export default class UserModel {
    insertRow(entity, nameTable) {
        return db(nameTable)
            .insert(entity)
            .then((response) => {
                return response[0];
            })
            .catch((err) => {
                
                return err;
            });
            
    }
    deleteRow(nameTable, nameRow, contentRow) {
        return db(nameTable)
            .delete()
            .where(nameRow, contentRow)
            .then((response) => {
                return response[0];
            });
    }

    getData(nameTable) {
        return db(nameTable)
           .then(data =>{
               return data
           })
    }

}