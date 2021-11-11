const baseUrl = 'http://115.159.53.197:8080'

const getHttp = (url,param) => {
    return axios({
        url:baseUrl + url,
        method:'get',
        params:param
    })
}

const postHttp = (url,data,param) => {
    return axios({
        url:baseUrl + url,
        method:'post',
        params:param,
        data: data
    })
}

const postAdduser = (param) => {
    postHttp('/test/user/save',null,param)
}
// 查询轮播图
const postAdvertisementList = () => {
    return postHttp('/api/advertisementList')
}
// 首页信息
const postIndexTitleList = () => {
    return postHttp('/api/indexTitleList')
}
// tab导航列表
const postModelListByName = (modelName) => {
    return postHttp(`/api/syscatalogListByModualName?yiliaoModel=${modelName}`)
}
// 通过id查询咨询列表
const postDetailListById = (param) => {
    return postHttp(
        `/api/titleListByCatalogId`,
        null,
        param
    )
}
// 通过id查询咨询列表
const postTitleListByCatalogId = (param) => {
    return postHttp(
        `/api/titleListByCatalogId`,
        null,
        param    
    )
}
// 获取医生列表
const postSearchDoctor = (param) => {
    return postHttp(
        `/api/listSearchYiliaoDoctor`,
        null,
        param    
    )
}
// 通过id获取医生详情
const postSearchDoctorById = (id) => {
    return postHttp(
        `/api/selectYiliaoDoctor?doctorId=${id}`,
        null,
        null    
    )
}
// 获取医院列表
const postSearchHospital = (param) => {
    return postHttp(
        `/api/listSearchYiliaoHospital`,
        null,
        param    
    )
}
// 通过id获取医院详情
const postSearchHospitalById = (param) => {
    return postHttp(
        `/api/selectYiliaoHospital`,
        null,
        param    
    )
}
// 通过id获取医院详情
const postSearchProvince = (param) => {
    return postHttp(
        `/api/listByYiliaoProvince`,
        null,
        param    
    )
}
// 通过id获取医院详情
const postDoctorPcatalog = (name) => {
    return postHttp(
        `/api/listDoctorPcatalog?catalogName=${name}`,
        null,
        null
    )
}
// 获取产品库-产品类型
const postProductPcatalog = (param) => {
    return postHttp(
        `/api/listProductPcatalog`,
        null,
        param
    )
}
// 获取产品列表
const postProductList = (param) => {
    return postHttp(
        `/api/listSearchYiliaoProduct`,
        null,
        param
    )
}
// 获取产品详情
const postProductDetail = (id) => {
    return postHttp(
        `/api/selectYiliaoProduct?productId=${id}`,
        null,
        null
    )
}
// 获取产品详情
const postCompanyDetail = (id) => {
    return postHttp(
        `/api/selectYiliaoEnterprise?enterpriseId=${id}`,
        null,
        null
    )
}
// 获取企业列表
const postEnterpriseList = (param) => {
    return postHttp(
        `/api/listSearchYiliaoEnterprise`,
        null,
        param
    )
}
// 获取省列表
const postProvinceList = (param) => {
    return postHttp(
        `/api/listByYiliaoProvince`,
        null,
        param
    )
}
// 获取企业列表
const postCompanyList = (param) => {
    return postHttp(
        `/api/listSearchYiliaoEnterprise`,
        null,
        param
    )
}
// 根据企业ID得到产品列表或根据产品名称得到企业列表
const postEnterpriseProductList = (param) => {
    return postHttp(
        `/api/listSearchEnterpriseProduct`,
        null,
        param
    )
}
// 根据企业ID得到产品列表或根据产品名称得到企业列表
const postTitleById = (id) => {
    return postHttp(
        `/api/titleById?titleId=${id}`,
        null,
        null
    )
}