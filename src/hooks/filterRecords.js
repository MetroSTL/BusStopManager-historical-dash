import axios from 'axios'

const filterRecords = async (token, id) => {

    const bsm_url = `https://metroas08.metrostlouis.org/arcserver/rest/services/Hosted/bus_stop_manager_fc_View/FeatureServer/0/query?where=cast%28stop_id+as+varchar%2810%29%29+LIKE+%27%25${id}%25%27&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&distance=&units=esriSRUnit_Foot&relationParam=&outFields=*&returnGeometry=true&maxAllowableOffset=&geometryPrecision=&outSR=&havingClause=&gdbVersion=&historicMoment=&returnDistinctValues=false&returnIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&multipatchOption=xyFootprint&resultOffset=&resultRecordCount=&returnTrueCurves=false&returnCentroid=false&sqlFormat=none&resultType=&datumTransformation=&f=pjson&token=${token}`
    
    return await axios.get(bsm_url).then(resp => resp.data.features);
};

export default filterRecords;