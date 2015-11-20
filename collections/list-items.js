ListItems = new Mongo.Collection("list-items");

ListItems.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

ListItems.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

let ListItemsSchema = new SimpleSchema({
  "listId": {
    type: String,
    label: "ID of the wish list for this item"
  },
  "order": {
    type: String,
    label: "The order this item belongs in the list"
  },
  "name": {
    type: String,
    label: "The name of this item."
  },
  "url": {
    type: String,
    label: "The optional URL of this item"
    optional: true
  }
});

ListItems.attachSchema(ListItemsSchema);
