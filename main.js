const express = require('express');
var cors = require('cors');
require('dotenv').config()
require('./configs/database');

const ExternalMembersWS = require('./bl/membersbl');
const ExternalMoviesWS = require('./bl/moviesbl');

const MembersRouter= require('./routers/membersrouter');
const moviesRouter= require('./routers/moviesrouter');
const subscriptionsRouter= require('./routers/subscriptionsrouter');


var app = express();

app.use(cors());



app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//ExternalMoviesWS.getMoviesFromExternalWS();

app.use('/api/members',MembersRouter)
app.use('/movies',moviesRouter)
app.use('/subscriptions',subscriptionsRouter)

let port = process.env.PORT || 8000;
app.listen(port);












