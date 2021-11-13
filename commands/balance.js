module.exports = {
name: "balance",
aliases: ["bal"],
  code: `$title[$username[$mentioned[1;yes]]]
  $description[:momey_with_wings: Cash: $getGlobalUserVar[cash;$mentioned[1;yes]]
  :moneybag: Bag: $getGlobalUserVar[bank;$mentioned[1;yes]]]
  $color[RANDOM]`
}
