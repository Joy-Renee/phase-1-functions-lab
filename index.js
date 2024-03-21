// Code your solution in this file!

const HqBlocks = 42
function distanceFromHqInBlocks(DistToHq){
    if(DistToHq < HqBlocks){
        let Tblock = HqBlocks - DistToHq

        //console.log(Tblock)
        return Tblock
    }

    let TblockS = DistToHq - HqBlocks 
    
    //console.log(TblockS)
    return TblockS 
}

distanceFromHqInBlocks(43)
distanceFromHqInBlocks(50)
distanceFromHqInBlocks(34)

//distance in feet
const FeetNo = 264

function distanceFromHqInFeet(DistToHq){
   
    if(DistToHq < HqBlocks){
        let TblockS = HqBlocks - DistToHq
        let TfeetNo = FeetNo * TblockS
        console.log(TfeetNo)
        return TfeetNo

    }

    let TblockS = DistToHq - HqBlocks 
    let TfeetNo = FeetNo * TblockS
    console.log(TfeetNo)
    return TfeetNo

}
distanceFromHqInFeet(43)
distanceFromHqInFeet(50)
distanceFromHqInFeet(34)


//distanceTravelledInFeet

function distanceTravelledInFeet(start, destination){
   
    if(start > destination){

        let diSt = start - destination 
        let TravelFeet = diSt * 264
        return TravelFeet
    }

    let diSt = destination - start
    let TravelFeet = diSt * 264
    return TravelFeet
    
}

distanceTravelledInFeet(43, 48)
distanceTravelledInFeet(50, 60)
distanceTravelledInFeet(34, 28)

//console.log(distanceTravelledInFeet(43, 48))
//console.log(distanceTravelledInFeet(34, 28))


//calculatesFarePrice

function calculatesFarePrice(start, destination){

    let subTract = start - destination 
    let distTravel = subTract * 264 

    if(distTravel <= 400){
        return 0;

    }
    else if(distTravel > 400 && distTravel <= 2000){
        const miNus = distTravel - 400
        const proDuct = miNus * 0.02
        return proDuct ;

    }
    else if(distTravel > 2000 && distTravel <= 2500){
        return 25;

    }
    else{
        return 'cannot travel that far';
    }

}

calculatesFarePrice(43, 44)
calculatesFarePrice(34, 32)
calculatesFarePrice(50, 58)
calculatesFarePrice(34, 23)

//console.log(calculatesFarePrice(43, 44))
//console.log(calculatesFarePrice(34, 32))
//console.log(calculatesFarePrice(50, 58))
//console.log(calculatesFarePrice(34, 23))