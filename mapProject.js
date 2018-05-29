
        var startLoc = {lat: 38.5, lng: 265}    // center of the US
    
        //the arsenal
        var fatMan = {
            name: 'Fat Man',
            bombRadius: 3000,   // in meters
            description: '(bomb dropped on Nagasaki)'   
        }
        var littleBoy = {
            name: 'Little Boy',
            bombRadius: 4000,
            description: '(bomb dropped on Hiroshima)'
        }
        var castleBravo = {
            name: 'Castle Bravo',
            bombRadius: 75000,
            description: '(largest bomb tested by US)'
        }
        var northKoreaBomb ={
            name: 'name classified',
            bombRadius: 38000,
            description: '(most recent North Korea test)'
        }
        var shakti ={
            name: 'Shakti I',
            bombRadius: 9000,
            description: '(largest bomb tested by India)'
        }
        var kanyon ={
            name: 'Kanyon',
            bombRadius: 170000,
            description: '(bomb currently being developed by Russia)'
        }
        var tsarBomba = {
            name: 'Tsar Bomba',
            bombRadius: 100000,
            description: '(largest bomb ever tested)'
        }
        
        
        var selectedBomb = 0;
        
        // function to display which bomb is selected
        // x is the radius, y is the bomb name, z is the bomb description
        function selectedDescriptionFun(y,z){
                document.getElementById('bombDescription').innerHTML = "<span>" + y +" "+ z +" is selected </span>";
        }


        // All the onclick functions
        function selectTsarBomba(){
            selectedDescriptionFun(tsarBomba.name,tsarBomba.description);
            return selectedBomb = tsarBomba;
        }
        function selectLittleBoy(){
            selectedDescriptionFun(littleBoy.name,littleBoy.description);
            return selectedBomb = littleBoy;
        }
        function selectCastleBravo(){
            selectedDescriptionFun(castleBravo.name,castleBravo.description);
            return selectedBomb = castleBravo;
        }
        function selectNorthKorea(){
            selectedDescriptionFun(northKoreaBomb.name,northKoreaBomb.description);
            return selectedBomb = northKoreaBomb;
        }
        function selectShakti(){
            selectedDescriptionFun(shakti.name,shakti.description);
            return selectedBomb = shakti;
        }
        function selectFatMan(){
            selectedDescriptionFun(fatMan.name,fatMan.description);
            return selectedBomb = fatMan;
        }
        function selectKanyon(){
            selectedDescriptionFun(kanyon.name,kanyon.description);
            return selectedBomb = kanyon;
        }
        
        

        function clearMap(){
            location.reload();
        }
        

        
        // various attributes of the starting map
        var myOptions = {
            zoom: 5,
            center: startLoc,
            mapTypeId: google.maps.MapTypeId.TERRAIN,
            disableDefaultUI: true,
            panControl: false,
            zoomControl: true,
            
        }
        var map = new google.maps.Map(document.getElementById('map_canvas'), myOptions);
        map.setOptions({draggableCursor:'crosshair'});
        
        // evokes function to place the marker with a mouse click
        google.maps.event.addListener(map, 'click', function(e) {
            placeMarker(e.latLng);
         });
         
        


        // function to make the marker a circle
        function placeMarker(location) {
           var blastRadius = new google.maps.Circle({
                center: location, 
                map: map,
                strokeColor: 'red',
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: 'red',
                fillOpacity: 0.65,
                radius: selectedBomb.bombRadius,    
            });
            var fallOutRadius = new google.maps.Circle({
                center: location,
                map: map,
                strokeColor: 'orange',
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: 'orange',
                fillOpacity: 0.55,
                radius: selectedBomb.bombRadius * 5,
            })

        }
           

        


        