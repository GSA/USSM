require 'json' 

module Jekyll

  class JSONPostGenerator < Generator
    safe true

    def generate(site)
      puts("Generating JSON for Static API")
      site.collections["pages"].each do |page|
        render_json(page,site)    
      end
    end

    def render_json(post, site)

      #add `json: false` to YAML to prevent JSONification
      if post.data.has_key? "json" and !post.data["json"]
        return
      end
      
      path = "_site/static-api" + post.url + "/data.json"

      # TODO: output different set of fields based on pagetype
      output = {
        "url": post.to_liquid["url"],
        "name": post.to_liquid["name"],
        "phase": post.to_liquid["phase"],
        "keyTask": post.to_liquid["keyTask"],
        "objective": post.to_liquid["objective"],
        "responsibleParty": post.to_liquid["responsibleParty"],
        "category": post.to_liquid["category"],
        "inputs": post.to_liquid["inputs"],
        "outputs": post.to_liquid["outputs"],
        "stakeholders": post.to_liquid["stakeholders"],
        "bestPractice": post.to_liquid["bestPractice"],
        "activities": post.to_liquid["activities"],
        "activitiesGroups": post.to_liquid["activitiesGroups"],
        "activitiesText": post.to_liquid["activitiesText"],
        "documentation": post.to_liquid["documentation"],
        "documentation_intro": post.to_liquid["documentation_intro"],
        "exitCriteria": post.to_liquid["exitCriteria"],
        "sections": post.to_liquid["sections"]
      }
      
      # Alternative: Simply output all available data
      # there are some unwanted items though
      # output = {"data": post.to_liquid}

      FileUtils.mkdir_p(File.dirname(path))
      File.open(path, 'w') do |f|
        f.write(output.to_json)
      end

    end
  end
end