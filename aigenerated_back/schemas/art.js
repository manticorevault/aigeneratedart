export default {
    name: "art",
    title: "Art",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string"
        },
        {
            name: "prompt",
            title: "Prompt",
            type: "string"
        },
        {
            name: "description",
            title: "Description",
            type: "string"
        },
        {
            name: "link",
            title: "Link",
            type: "url"
        },
        {
            name: "category",
            title: "Category",
            type: "string"
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true
            }
        },
        {
            name: "userId",
            title: "UserID",
            type: "string"
        },
        {
            name: "postedBy",
            title: "PostedBy",
            type: "postedBy"
        },
        {
            name: "save",
            title: "Save",
            type: "array",
            of: [{ type: "save" }]
        },
        {
            name: "comments",
            title: "Comments",
            type: "array",
            of: [{ type: "comment" }]
        },
    ]
}