    public static class SelectListItemExtensions
    {
        /// <summary>
        /// Data.ToSelectListItems(s=>s.Id,s=>s.Name);
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="baseEntities"></param>
        /// <param name="valueExpression"></param>
        /// <param name="textExpression"></param>
        /// <param name="defaultValue"></param>
        /// <returns></returns>
        public static IEnumerable<CommonDto> ToSelectListItems<T>(this IEnumerable<T> baseEntities, Expression<Func<T, int>> valueExpression, Expression<Func<T, string>> textExpression)
        {
            dynamic valueNameObject = valueExpression.Body.GetType().GetProperty("Member").GetValue(valueExpression.Body, null);
            dynamic textNameobject = textExpression.Body.GetType().GetProperty("Member").GetValue(textExpression.Body, null);

            var valueName = (string)valueNameObject.Name;
            var textName = (string)textNameobject.Name;

            return ToSelectListItems(baseEntities, valueName, textName);
        }
        /// <summary>
        /// Data.ToSelectListItems("Id", "Name")
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="baseEntities"></param>
        /// <param name="valueName"></param>
        /// <param name="textName"></param>
        /// <param name="defaultValue"></param>
        /// <returns></returns>
        public static IEnumerable<CommonDto> ToSelectListItems<T>(this IEnumerable<T> baseEntities, string valueName, string textName)
        {
            foreach (var baseEntity in baseEntities)
            {
                yield return new CommonDto
                {
                    ID = Convert.ToInt32(GetPropertyValue(baseEntity, textName)),
                    Value = GetPropertyValue(baseEntity, valueName).ToString()
                };
            }
        }

        public static object GetPropertyValue(object obj, string propertyName)
        {
            //反射去获得对象的某个属性值
            Type t = obj.GetType();
            PropertyInfo info = t.GetProperty(propertyName);
            return info.GetValue(obj, null); //设置为SetValue
        }
    }