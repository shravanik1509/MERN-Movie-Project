import React from "react";

const commands = [
    {
        title:"Connecting using mongosh",
        "code":"mongosh <>"
    },
  {
    title: "Show Databases",
    code: "show dbs"
  },
  {
    title: "Use Database",
    code: "use moviesdb"
  },
  {
    title:"Create collection",
    code:"db.movies.insertOne({})"
  },
  {
    title: "Insert Document",
    code: "db.movies.insertOne({ title: '3 Idiots', year: 2009 })"
  },
  {
    title: "Find All",
    code: "db.movies.find()"
  },
  {
    title: "Find with Filter",
    code: "db.movies.find({ genre: 'Drama' })"
  },
  {
    title: "Update Document",
    code: "db.movies.updateOne({ title: '3 Idiots' }, { $set: { year: 2010 } })"
  },
  {
    title: "Delete Document",
    code: "db.movies.deleteOne({ title: '3 Idiots' })"
  },
  {
    title: "Sort",
    code: "db.movies.find().sort({ year: -1 })"
  }
];

function MongoCommands() {
  return (
    <div className="container">
      <h4 className="mb-4">MongoDB Commands</h4>

      <div className="row g-3">
        {commands.map((cmd, index) => (
          <div className="col-md-6" key={index}>
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h6 className="card-title">{cmd.title}</h6>

                <pre className="bg-light p-2 rounded">
                  <code>{cmd.code}</code>
                </pre>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export { MongoCommands}