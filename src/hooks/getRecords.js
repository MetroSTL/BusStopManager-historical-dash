import axios from 'axios'

const getRecords = async (t, id) => {
    const stops_url = `https://maps.metrostlouis.org/arcserver/rest/services/Hosted/MetroBusStops_REGISTERED/FeatureServer/0/query?where=cast%28stopid+as+varchar%2810%29%29+LIKE+%27%25${id}%25%27&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&distance=&units=esriSRUnit_Foot&relationParam=&outFields=signid%2C+stopid%2C+stopname%2C+onst%2C+atst%2C+routes%2C+gps_lat%2C+gps_lon&returnGeometry=true&maxAllowableOffset=&geometryPrecision=&outSR=&havingClause=&gdbVersion=&historicMoment=&returnDistinctValues=false&returnIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&multipatchOption=xyFootprint&resultOffset=&resultRecordCount=&returnTrueCurves=false&returnCentroid=false&sqlFormat=none&resultType=&datumTransformation=&f=pjson&token=${t}`
    const ghoststops_url = `https://maps.metrostlouis.org/arcserver/rest/services/Hosted/MetroBusGhostStops_REGISTERED/FeatureServer/0/query?where=cast%28stopid+as+varchar%2810%29%29+LIKE+%27%25${id}%25%27&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&distance=&units=esriSRUnit_Foot&relationParam=&outFields=signid%2C+stopid%2C+stopname%2C+onst%2C+atst%2C+gps_lat%2C+gps_lon&returnGeometry=true&maxAllowableOffset=&geometryPrecision=&outSR=&havingClause=&gdbVersion=&historicMoment=&returnDistinctValues=false&returnIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&multipatchOption=xyFootprint&resultOffset=&resultRecordCount=&returnTrueCurves=false&returnCentroid=false&sqlFormat=none&resultType=&datumTransformation=&f=pjson&token=${t}`

    let busstops = await axios.get(stops_url).then(resp => resp.data.features)
        .then(async features =>{
            let ghost = await axios.get(ghoststops_url).then(resp => resp.data.features)
            return await features.concat(await ghost)
        })

    return await busstops;


};

export default getRecords;