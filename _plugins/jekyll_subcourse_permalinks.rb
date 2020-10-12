module Jekyll
  class PermalinkRewriter < Generator
    safe true
    priority :low

    def generate(site)
      site.collections.each do |item|
        item[1].docs.each do |page|
          case item[0].to_s
          when 'posts'
            @category = page.data['category']
            @thumbnail = page.data['thumbnail']
            page.data['permalink'] = "/#{@category}/:title/"
            unless @thumbnail.nil?
              page.data['ogp'] = "/assets/article/#{@category}#{@thumbnail}"
            end
          when 'courses'
            @parent = page.data['parent']
            @category = page.data['category']
            @thumbnail = page.data['thumbnail']
            @slides = page.data['slides']

            page.data['ogp'] = @thumbnail.nil??
              "/assets/course/#{@category}/#{page.data['course-name']}#{@slides[0]}"
            :
              page.data['ogp'] = "/assets/course/#{@category}/#{page.data['course-name']}#{@thumbnail}"

            page.data['permalink'] = @parent.nil??
              "/courses/#{@category}/:title/"
            :
            "/courses/#{@category}/#{@parent}/:title/"
          when 'categories'
            @name = page.data['categoryname']
            page.data['permalink'] = "/courses/#{@name}/"
          end
        end
      end
    end
  end
end
