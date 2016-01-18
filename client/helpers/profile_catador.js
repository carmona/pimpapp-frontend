
Template.imageView.helpers({
  images: function () {
    // retrieve picture for selected catador
    var catador = Catadores.findOne(getCatadorIdFromUrl());
    var img = Images.find({'_id': catador.picture});
    return img;
  }
});


Template.CatadorDetails.helpers({
  
  name: function() {
    var catador = Catadores.findOne(getCatadorIdFromUrl());
    return catador.name;
  },

  telephone: function() {
    var catador = Catadores.findOne(getCatadorIdFromUrl());
    return catador.telephone;
  },
  
  whatsapp: function() {
    var catador = Catadores.findOne(getCatadorIdFromUrl());
    var returnVal = (catador.whatsapp)? 'Sim' : 'Não';
    return returnVal;
  },

  motorizedVehicle: function() {
    var catador = Catadores.findOne(getCatadorIdFromUrl());
    var returnVal = (catador.motorizedVehicle)? 'Sim' : 'Não';
    return returnVal;
  },

  services: function() {
    var catador = Catadores.findOne(getCatadorIdFromUrl());
    var services = [];
    if (catador.services_recyclable) services.push(services_recyclable_str);
    if (catador.services_construction) services.push(services_construction_str);
    if (catador.services_freight) services.push(services_freight_str);
    if (catador.services_furniture) services.push(services_furniture_str);
    if (catador.services_metals) services.push(services_metals_str);
    if (catador.services_electronics) services.push(services_electronics_str);
    if (catador.services_other_materials) services.push(services_other_materials_str);
    if (catador.services_construction) services.push(services_construction_str);
    if (catador.services_metals) services.push(services_metals_str);

    var servicesString = services.join(", ");
    
    return servicesString;

  }

});



function getCatadorIdFromUrl() {
  // get url of current page
  var currentUrl = Router.current().originalUrl;
  
  // retrieve path
  var a = document.createElement('a');
  a.href = currentUrl;
  var pathname = a.pathname;

  // pathname takes form /catadorprofile/<id>
  var id = pathname.split('/catadorprofile/')[1]

  return id;
}

