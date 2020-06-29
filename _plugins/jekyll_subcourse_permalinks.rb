module Jekyll
  class PermalinkRewriter < Generator
    safe true
    priority :low

    def generate(site)
      site.collections.each do |item|
        item.each_with_index do |category, i|
          case category.to_s
          when 'posts'
            item[i + 1].docs.each do |page|
              @category = page.data['category']
              page.data['permalink'] = "/#{@category}/:title/"
            end
          when 'courses'
            item[i + 1].docs.each do |page|
              @parent = page.data['parent']
              @category = page.data['category']
              @thumbnail = page.data['thumbnail']
              unless @thumbnail.nil?
                page.data['ogp'] = "/assets/course/#{@category}/#{page.data['course-name']}#{@thumbnail}"
              end
              if @parent.nil?
                page.data['permalink'] = "/#{@category}/:title/"
              else
                page.data['permalink'] = "/#{@category}/#{@parent}/:title/"
              end
            end
          when 'categories'
            item[i + 1].docs.each do |page|
              @name = page.data['categoryname']
              page.data['permalink'] = "/#{@name}/"
            end
          end
        end
      end
    end
  end
end
