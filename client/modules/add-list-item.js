let template,
    form;

let add = (options) => {
  template = options.template;
  form     = options.form;

  _validate(form);
};

let _validate = (form) => {
  $(form).validate(validation());
};

let validation = () => {
  return {
    rules: {
      itemName: {
        required: true
      },
      itemUrl: {
        url: true
      }
    },
    messages: {
      itemName: {
        required: "Whoops! This item needs a name."
      },
      itemUrl: {
        url: "Is this correct? Don't forget the http:// part!"
      }
    },
    submitHandler() {
      _handleAdd();
    }
  };
};

let _handleAdd = () => {
  let item = {
    listId: FlowRouter.current().params._id,
    name: template.find( '[name="itemName"]' ).value,
    url: template.find( '[name="itemUrl"]' ).value
  };

  Meteor.call( 'addItemToList', item, (error) => {
    if(error) {
      Bert.alert(error.reason, 'warning');
    } else {
      Bert.alert('Item added! Better stay on the nice list :)', 'success');
      $(form).get(0).reset();
    }
  });
};

Modules.client.addItem = add;
