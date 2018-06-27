module.exports = class extends think.Logic {
  doAddOrUpdateCellAction() {
    this.allowMethods = 'post';
  }

  queryAllCellPageListAction() {
    this.allowMethods = 'get';

  }
  queryCellListByAreaIdAction() {
    this.allowMethods = 'get';
  }
  querCellAllListAction() {}
  deltCellAction() {
    this.allowMethods = 'post';
  }

  queryAreaAndBGIDByCoordinateAction() {
    this.allowMethods = 'post';
    let rules = {
      point: {
        required: true,
        object: true

      }

    }
    let msg = {
      required: '{name} 格式错误'
    }
    let flag = this.validate(rules, msg);
    if (!flag) {
      return
      this.fail('validate error', this.validateErrors);
    }
  }
};
