function(doc) {
  if (doc.type == "reqmgr_request"){
    emit([doc.campaign, doc.request_date], {"id": doc._id}) ;
  }
}
