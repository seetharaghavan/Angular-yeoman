app.service('equation_solver',function(){

  this.solver = function solver(equat, variable_value){

    var equation_components_collection = [];

    var equat_degree_RegEx = new RegExp(/([-|+])?[(\d+)]*?([a-z])\^?(\d+)?/gi);

    var components = equat.match(equat_degree_RegEx);

    var equation_constant;

    var equation_components = function(variable, degree, constant) {
      this.variable = variable;
      this.degree = degree;
      this.constant = constant;
    };


    components.forEach(function(component){

      var powerRegEx = (/([-|+])?(\d+)*?([a-z])\^?(\d+)?/ig).exec(component);
      console.log(powerRegEx)
      if(powerRegEx){
        if(powerRegEx[1]&&powerRegEx[2]){
          var constant = powerRegEx[1].concat(powerRegEx[2])
        }
        else if(powerRegEx[1]&&!powerRegEx[2]){var constant = powerRegEx[1].concat("1")}
        else if(!powerRegEx[1] && powerRegEx[2]){var constant = powerRegEx[2]}
        else{
          var constant = 1
        }
        var variable = powerRegEx[3];

        if(powerRegEx[4]){var degree = powerRegEx[4]}else{var degree = 1}

      }
      else {var variable = "x"; degree=0; var constant = component}


      var equation_component = new equation_components (variable, degree, constant);

      equation_components_collection.push(equation_component)

    });


    function processing(equation_components_collection, variable_value){
      var component_validate
      var fx = 0
      equation_components_collection.forEach(function(component_collection)
      {

        //component_collection.variable = variable_value;
        component_validate = component_collection.constant*(Math.pow(variable_value, component_collection.degree))
        fx = component_validate + fx

      });

      return fx
    }




    function display(equation_components_collection){
      var component_tag = "";

      equation_components_collection.forEach(function(equation_component){

        var display;
        if(!((equation_component.degree) == 0 || (equation_component.degree) == 1)){
          var degree_display = "<sup>"+equation_component.degree+"</sup>";
          display = equation_component.constant + equation_component.variable + degree_display

        }
        else if(equation_component.degree == 1){display = equation_component.constant + equation_component.variable}
        else{display = equation_component.constant}
        component_tag = component_tag.concat(display)

      })
      if(/^[+-]\d+/.test(component_tag)){
        component_tag = component_tag.replace(/^[+-]/, '')
      }
      return component_tag;
    }



    function populateFx(equation_components_collection){
      var variable_values = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];
      var corresponding_fx = [];
      var fx
      var table_object = function(variable_values, corresponding_fx){
        this.variable_values = variable_values;
        this.corresponding_fx = corresponding_fx;
      }
      variable_values.forEach(function(variable_value){
        fx = processing(equation_components_collection, variable_value )
        corresponding_fx.push(fx)
      })
      table_object = new table_object(variable_values, corresponding_fx)
      return table_object;
    }


    function differential_equation(equation_components_collection){
      var max_degree = 0
      var differential_equation_allOrders = [];
      var differential_equation_components = [];
      var differential_equation_components_object = function(equation_tags, equation_components){
        this.equation_tags = equation_tags;
        this.equation_components = equation_components;
      }
      equation_components_collection.forEach(function(equation_components_collection){
        if(equation_components_collection.degree > max_degree){
          max_degree = equation_components_collection.degree
        }
      })
      for(var i = 0; i<max_degree-1; i++){
        differential_equation_allOrders.push("<span>" + display(differential(equation_components_collection)) + "</span>")
        differential_equation_components.push(differential(equation_components_collection))

        equation_components_collection = differential(equation_components_collection)
      }

      differential_equation_components_object = new differential_equation_components_object(differential_equation_allOrders, differential_equation_components)
      console.log(differential_equation_components_object.equation_components)
      return differential_equation_components_object
    }
    //console.log(differential_equation(equation_components_collection))
    function differential(equation_components_collection){
      var differential_components = []
      var differential =  function(variable, degree, constant){
        this.constant = constant;
        this.variable = variable;
        this.degree = degree;
      };

      var max_degree = 0
      equation_components_collection.forEach(function(equation_components_collection){

        var order = ["First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh", "Eighth", "Nineth", "Tenth"]
        if(equation_components_collection.degree>1){

          var constant = equation_components_collection.constant*equation_components_collection.degree
          var degree = equation_components_collection.degree-1
          var variable = equation_components_collection.variable


        }
        if(equation_components_collection.degree == 1){
          var degree = ""
          var constant = equation_components_collection.constant
          var variable = ""

        }
        if(equation_components_collection.degree == 0){
          var variable = ""
          var constant = ""
          var degree = ""
        }

        if ((constant>0)&&(/[+-]\d+/).test(constant)==false){
          constant = "+" + constant;
        }
        else{
          constant = ""+constant;
        }
        var differential_comp =  new differential(variable, degree, constant)
        differential_components.push(differential_comp)
      })

      return (differential_components)

    }

    function differentialEquation_table(differential_componenets_collection){
      var differential_table = [];
      differential_componenets_collection.forEach(function(item){
        differential_table.push(populateFx(item))
      })
      return differential_table
    }


    var final_output = {
      equation_components_collection:equation_components_collection,
      processedValue:processing(equation_components_collection, variable_value),
      displayedEquation:display(equation_components_collection),
      tableObject:populateFx(equation_components_collection),
      differentialEquation:differential_equation(equation_components_collection),

      //differentialEquation_table : differentialEquation_table(differential(equation_components_collection))
    }

    return final_output
    //return
  }

})
