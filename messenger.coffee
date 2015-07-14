_errorMessage = new ReactiveVar()
_successMessage = new ReactiveVar()

Messenger = {
  deliver: (message, type = "success") ->
    if type == "success"
      _successMessage.set(message)
    else
      _errorMessage.set(message)
}

Meteor.startup () ->
  if Meteor.isClient
    Tracker.autorun () ->
      if _errorMessage.get()
        alertify.error(_errorMessage.get())
        _errorMessage.set(null)
      if _successMessage.get()
        alertify.success(_successMessage.get())
        _successMessage.set(null)