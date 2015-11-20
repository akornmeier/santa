Lists = new Mongo.Collection('lists');

Lists.allow({
  insert: () => false,
  update: () => false,
  remove: () => false
});

Lists.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

let ListsSchema = new SimpleSchema({
  "name": {
    type: String,
    label: "Name of the wisher"
  },
  "sent": {
    type: Boolean,
    label: "Sent to Santa?"
  }
});

Lists.attachSchema( ListsSchema );
