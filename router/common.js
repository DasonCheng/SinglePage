exports.sundry = function(req,res,next){
    //1.��������urlѡ�ж���,��߲˵�
    res.locals.activeNav = function (nav){
        var result = '';
        if(nav == '/'){
            if(req.path == '/'){
                result = 'active';
            }
        }else{
            if(req.path.indexOf(nav) == 0){
                result = 'active';
            }
        }
        return result;
    };
    next();
};