/* Dit is de Module bij Angular is het zo dat je de module
een soort superclass is van de controller. De module kan ook 
afhankelijkheden hebben van andere modules is wel handig voor
de toekomst. (die array[] is dus de dependencies) maar hebben
we nu niet nodig.*/

var getData = angular.module('getData', []);



/* Dit is de suggestion search zoals je 
onder JSON ziet hieruit filtert hij bij het zoeken 
zie : <input type="text" data-ng-model="filter.name" /> in de body*/


getData.controller("jsonGetController", function($http,$scope)
{    
    $http({
        method: 'GET',
        dataType:'jsonp',
        url: 'http://localhost/jsn.php'

}).success (function(response, index){
       
    $scope.products = response;
    console.log(response)

        
})
    
    }
)





    


    /* Hier wordt de function addComponent verder verwerkt.
    Zoals je ziet geeft hij een $scope (welke bekend is in zowel
    de index als de js. De scope ziet alles mits je in de 
    <html ng-app="modulenaam" hij ziet het ook zonder maar toch beter.
    <button data-ng-click="addComponent()">Voeg onderdeel toe</button>
    Zoals te zien is in de index zie je de bovenstaande code.
    $scope houd in ik zoek in mijn scope de addComponent en dit is een
    functie die het volgende moet doen {    
    */

   