import axios from 'axios'

const getRecords = async (token) => {
    console.log('getResults()')
    console.log('token: ', token)

    const busstops = await axios.get(`https://metroas08.metrostlouis.org/arcserver/rest/services/Hosted/MetroBusStops_REGISTERED/FeatureServer/0/query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&distance=&units=esriSRUnit_Foot&relationParam=&outFields=stopid%2C+stopname%2C+onst%2C+atst%2C+routes%2C+gps_lon%2C+gps_lat&returnGeometry=true&maxAllowableOffset=&geometryPrecision=&outSR=&havingClause=&gdbVersion=&historicMoment=&returnDistinctValues=false&returnIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&multipatchOption=xyFootprint&resultOffset=&resultRecordCount=&returnTrueCurves=false&returnCentroid=false&sqlFormat=none&resultType=&datumTransformation=&f=pjson&token=${token}`)
        .then(resp => {
            return resp.data.features
        }).then(async features => {
            const ghost = axios.get(`https://metroas08.metrostlouis.org/arcserver/rest/services/Hosted/MetroBusGhostStops_REGISTERED/FeatureServer/0/query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&distance=&units=esriSRUnit_Foot&relationParam=&outFields=*&returnGeometry=true&maxAllowableOffset=&geometryPrecision=&outSR=&havingClause=&gdbVersion=&historicMoment=&returnDistinctValues=false&returnIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&multipatchOption=xyFootprint&resultOffset=&resultRecordCount=&returnTrueCurves=false&returnCentroid=false&sqlFormat=none&resultType=&datumTransformation=&f=pjson&token=${token}`).then(resp => resp.data.features)
            return features.concat(await ghost);
        })
    
    console.log(busstops)

    

};

export default getRecords;