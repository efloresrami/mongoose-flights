const Ticket = require('../models/tickets');


module.exports = {
  new: newTicket,
  create,
};



function create(req, res) {
  req.body.flight = req.params.id
  const ticket = new Ticket(req.body);
  ticket.save(function(err, ticket) {
    console.log(err, ticket)
    res.redirect(`/flights/${req.params.id}`);
  });

}

function newTicket(req, res) {
  res.render('tickets/new', {flight: req.params.id})
}