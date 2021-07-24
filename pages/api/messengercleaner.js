// export default function handler(req, res) {
//   var item = {
//     mode: "payment",
//     line_items: [
//       {
//         price: "price_1Hf6NOG68VOuImmbUYHs8Vih",
//         quantity: 1,
//       },
//     ],
//   };

//   var price;
//   switch (req.params.type) {
//     case "month":
//       price = "price_1Hf6MtG68VOuImmblUdKrTlY";
//       break;
//     case "annual":
//       price = "price_1Hf6MtG68VOuImmbvFoyQteF";
//       break;
//   }
//   if (price) {
//     item = {
//       subscription_data: {
//         items: [
//           {
//             plan: price,
//           },
//         ],
//       },
//     };
//   }
//   if (req.params.type == "month") {
//     // res.redirect('https://bit.ly/32CTnel');
//     // res.redirect('https://verblike.com/messenger-cleaner/');
//     res.redirect("https://bit.ly/2K3ousP");
//     return;
//   }
//   if (req.params.type == "oneday") {
//     // res.redirect('https://bit.ly/32CTnel');
//     // res.redirect('https://verblike.com/messenger-cleaner/');
//     // https://secure.wayforpay.com/button/bbc507c26aca4
//     res.redirect("https://bit.ly/3mcDuDa");
//     return;
//   }

//   item.success_url = `https://node.verblike.com/messengercleaner/stripeSuccess`;
//   item.cancel_url = `https://node.verblike.com/messengercleaner/stripeCancel`;
//   item.payment_method_types = ["card"];

//   stripe.checkout.sessions.create(item, function (err, session) {
//     if (err) {
//       console.log(err);
//       res.status(300).json(err);
//     } else {
//       // res.set('Content-Type', 'text/plain');
//       // console.log(session)
//       sendPage(session);
//       // res.json(session)
//     }
//     // asynchronously called
//   });
//   function sendPage(e) {
//     res.send(`
//     <html>
//     <body>
//     <script src="https://js.stripe.com/v3/"></script>
//     <script type="text/javascript">
//         var stripe = Stripe('pk_live_sEOpSDFSsko1msrMpggocDjn', {
//         // var stripe = Stripe('pk_test_r44LNzjfnsB3aDNhkWtYcGhH', {
//             maxNetworkRetries: 2,
//             betas: ['checkout_beta_4']
//         });
//         stripe.redirectToCheckout({
//           sessionId: '${e.id}',
//         }).then(function (result) {
//           console.log(result)
//         });
//     </script>
//     </body>
//     </html>
//   `);
//   }
// }
