// content: String,
// date: { type: Date, default: Date.now },
// user: { type: Schema.ObjectId, ref: "User" },

export class Comment{

 constructor(

    public _id:     String,
    public content: String,
    public date:    String,
    public  user:   any

 ){}

}