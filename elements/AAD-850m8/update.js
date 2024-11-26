function(instance, properties, context) {

    instance.data.text.text(properties.text);
    instance.data.text.css({backgroundColor:properties.backgroundcolor,color:properties.bubble.font_color,display:"table",padding:"8px", borderRadius:properties.border_radius + "px",textAlign:properties.bubble.font_alignment,fontFamily:properties.bubble.font_face,fontSize:properties.bubble.font_size,float:properties.bubble_alignment, lineHeight:1.15});

    var height = instance.data.text.height()+16 
    instance.setHeight(height);

}