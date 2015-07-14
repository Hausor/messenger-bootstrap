hausor:messenger-bootstrap
==================================================

Meteorjs wrapper around [alertify](http://fabien-d.github.io/alertify.js/) bootstrap plugin.
It allows you to write reactive notifications to your end users.

Instalation
--------------------------------------------------

To use it in your project just run:

    meteor add hausor:messenger-bootstrap


How to use it
--------------------------------------------------

Simplest usage

    Messenger.deliver("your awesome message")

Error

    Messenger.deliver("your awesome error", "error")