var newAgency = new Agency({
  agencyId: 123,
  agencyName: 'New Agency',
  agencyAddress: '123 Cypress Streeet, Tampa, FL - 33607'
});

newAgency.save(function(err){
  if (err)
    console.log('Error when saving newAgency');
});

newAgency = new Agency({
  agencyId: 234,
  agencyName: 'Old Agency',
  agencyAddress: '1500 Seagull Path, Palm Harbor, FL - 334685'
});

newAgency.save(function(err){
  if (err)
    console.log('Error when saving newAgency');
});
