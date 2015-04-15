// Write your tests here!
// Here is an example.

var bookSimpleSchema = new SimpleSchema({
        title: {
            type: String,
            label: "Title",
            max: 200
        },
        author: {
            type: String,
            label: "Author"
        },
        copies: {
            type: Number,
            label: "Number of copies",
            min: 0
        },
        lastCheckedOut: {
            type: Date,
            label: "Last date this book was checked out",
            optional: true
        },
        summary: {
            type: String,
            label: "Brief summary",
            optional: true,
            max: 1000
        }
    }
);

var bookJSONSchema = new JSONSchema({
    "title": "Book",
    "type": "object",
    "properties": {
        "title": {
            "type": "object",
            "title": "Title",
            "description": "The name of the project",
            "properties": {
                "type": "string",
                "label": "Title",
                "max": 200
            }
        },
        "author": {
            "type": "object",
            "title": "Author",
            "properties": {
                "type": "string",
                "label": "Author"
            }
        },
        "copies": {
            "type": "object",
            "title": "Number of copies",
            "properties": {
                "type": "number",
                "label": "Number of copies",
                "min": 0
            }
        },
        "lastCheckedOut": {
            "type": "object",
            "title": "Last date this book was checked out",
            "properties": {
                "type": "date",
                "label": "Last date this book was checked out",
                "optional": true
            }
        },
        "summary": {
            "type": "object",
            "title": "Brief Summary",
            "properties": {
                "type": "string",
                "label": "Brief summary",
                "optional": true,
                "max": 1000
            }
        }
    },
    "required": [
        "title",
        "author",
        "copies"
    ]
});

Tinytest.add('toSimpleSchema() produces expected SimpleSchema', function (test) {
    test.equal(EJSON.equals(bookJSONSchema.toSimpleSchema()._schema, bookSimpleSchema._schema), true, 'toSimpleSchema() did not produce the expected SimpleSchema');
});
