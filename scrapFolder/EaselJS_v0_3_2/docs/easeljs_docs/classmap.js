YAHOO.env.classMap = {"BitmapSequence": "EaselJS", "SpriteSheetUtils": "EaselJS", "Container": "EaselJS", "UID": "EaselJS", "Point": "EaselJS", "MouseEvent": "EaselJS", "Ticker": "EaselJS", "Shape": "EaselJS", "Bitmap": "EaselJS", "DisplayObject": "EaselJS", "Command": "EaselJS", "Graphics": "EaselJS", "Shadow": "EaselJS", "Stage": "EaselJS", "Text": "EaselJS", "Matrix2D": "EaselJS", "Rectangle": "EaselJS", "SpriteSheet": "EaselJS"};

YAHOO.env.resolveClass = function(className) {
    var a=className.split('.'), ns=YAHOO.env.classMap;

    for (var i=0; i<a.length; i=i+1) {
        if (ns[a[i]]) {
            ns = ns[a[i]];
        } else {
            return null;
        }
    }

    return ns;
};
